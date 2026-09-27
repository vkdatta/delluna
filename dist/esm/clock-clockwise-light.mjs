export const name="clock-clockwise-light";
export const id="dl_580c1c1ad35244b1b1f4";
export const url=new URL("../icons/clock-clockwise-light.svg?v=194c868e433b1428481c7dd7b84f783b678511dfdfebca8d68cec6ac07683193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
