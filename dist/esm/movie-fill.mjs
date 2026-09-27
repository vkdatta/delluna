export const name="movie-fill";
export const id="dl_91d76df6c333f9ac5dcf";
export const url=new URL("../icons/movie-fill.svg?v=5f58b74401ef4fb6b2c40b0f41d9d88ea7f3d040055cefc217ebbe49030db466",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
