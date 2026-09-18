export const name="fiber_pin-fill";
export const id="dl_7a35f4ff8a16495892ea";
export const url=new URL("../icons/fiber_pin-fill.svg?v=49a739d05423e55952b2bb1e5f0a5c7907bd5d9614e07b2092d29d263a2ebc6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
