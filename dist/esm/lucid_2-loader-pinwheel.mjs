export const name="lucid_2-loader-pinwheel";
export const id="dl_ef4d844ddb1f49d29e34";
export const url=new URL("../icons/lucid_2-loader-pinwheel.svg?v=1b952b4fcd9efdc0a4bd8a3542a48529009f55582f46ed86b1e330e470d57e54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
