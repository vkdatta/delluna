export const name="x-logo";
export const id="dl_9a316346c1090f25d30a";
export const url=new URL("../icons/x-logo.svg?v=053926c2ad82cbedd9fd2f6d90850afed9205da8d9554ad01d273918b9f4d861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
