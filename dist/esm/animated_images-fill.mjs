export const name="animated_images-fill";
export const id="dl_d385e15e6e604be140ec";
export const url=new URL("../icons/animated_images-fill.svg?v=484777740db4beb35a60c2aa9abb63d2c310f54f835e4a0a47573b70bd93ebe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
