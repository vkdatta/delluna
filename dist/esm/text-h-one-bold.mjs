export const name="text-h-one-bold";
export const id="dl_2c5b05ab6a954e959410";
export const url=new URL("../icons/T/text-h-one-bold.svg?v=e65c742a16f857f9e36e688e45c0dcd6e9c618ad8f6d9317e5a64cea654f6e72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
