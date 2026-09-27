export const name="pet_supplies";
export const id="dl_d03851f1035e67986bf2";
export const url=new URL("../icons/pet_supplies.svg?v=5d64c27629594f7215e86bfcf00d03778ee12a4f9db9072de53d48d505ea2017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
