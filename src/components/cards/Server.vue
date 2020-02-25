<template>
	<div class="col-lg-4 mb-4">
		<div class="card server">
			<div class="card-body">
				<i class="bx bxs-server icon"></i>

				<p class="name mb-0">
					Server name 1
				</p>
				<p class="ip text-muted mb-0">
					10.10.20.5:5251
				</p>
				<p class="status text-success">
					<i class="bx bx-check"></i> ONLINE
					<small class="text-muted">(ping 50)</small>
				</p>
				<div class="desc mb-2">
					<i class="bx bx-network-chart"></i> Connected to<br />
					<small>
						<a href="#" class="d-block"
							><i class="bx bx-subdirectory-right"></i> Service
							1</a
						>
						<a href="#" class="d-block"
							><i class="bx bx-subdirectory-right"></i> Service
							2</a
						>
					</small>
				</div>
				<div class="desc">
					<i class="bx bx-info-circle"></i> Description<br />
					<small>
						Oorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed vulputate sapien vitae faucibus iaculis. Morbi
						lacinia laoreet elit vitae ultricies.
					</small>
				</div>
				<div class="options mt-4 text-right">
					<button class="btn btn-sm btn-info mr-2">
						<i class="bx bx-edit-alt"></i> Edit
					</button>
					<button class="btn btn-sm btn-danger">
						<i class="bx bx-trash"></i> Remove
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.server {
	.icon {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		font-size: 4rem;
		opacity: 0.2;
	}

	.name {
		font-size: 1.5rem;
	}
	.ip {
		position: relative;
		top: -7px;
	}
	.status {
		font-weight: 500;
	}
	.desc {
		font-size: 0.9rem;
	}
}
</style>