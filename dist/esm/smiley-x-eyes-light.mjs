export const name="smiley-x-eyes-light";
export const id="dl_136397b36b8534c9d9e5";
export const url=new URL("../icons/smiley-x-eyes-light.svg?v=2ffe3e54c9dc000f3874b7f82934933f73c51660eb8f02e57e05109d77e2af19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
