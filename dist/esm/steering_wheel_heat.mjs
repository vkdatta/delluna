export const name="steering_wheel_heat";
export const id="dl_b6c23e2ee71946da9b95";
export const url=new URL("../icons/steering_wheel_heat.svg?v=69a12f0ce6e394bfae119c616b8e2d37a1cf005ec7095a3f6b0d0e213b049b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
