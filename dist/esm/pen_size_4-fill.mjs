export const name="pen_size_4-fill";
export const id="dl_34ed67eb6a8309f0c0a6";
export const url=new URL("../icons/pen_size_4-fill.svg?v=d56f4a10ee89f9519ec9465598ccac656453432f369497164b4afac8867a9c00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
