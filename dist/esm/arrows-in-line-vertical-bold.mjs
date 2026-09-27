export const name="arrows-in-line-vertical-bold";
export const id="dl_2ad1e5ddc779472bb72a";
export const url=new URL("../icons/arrows-in-line-vertical-bold.svg?v=442020c537d96cc1d0eab61d4b0ca95128a2e3eebcb5b3535fe10b275c35479a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
