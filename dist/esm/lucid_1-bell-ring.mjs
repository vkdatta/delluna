export const name="lucid_1-bell-ring";
export const id="dl_f0dc68f45a844a79b537";
export const url=new URL("../icons/lucid_1-bell-ring.svg?v=9a0ebbeb2896f6864793abe3ba77f686fc0f663307cc432182e6ab574060d9df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
