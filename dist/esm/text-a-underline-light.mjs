export const name="text-a-underline-light";
export const id="dl_701f913868389e35f9a2";
export const url=new URL("../icons/text-a-underline-light.svg?v=c4cf6df92a1254a69a1b1cb1242910aa5f553d79ac73dd700a81a17c7ca812d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
