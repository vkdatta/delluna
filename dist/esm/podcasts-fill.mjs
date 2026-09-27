export const name="podcasts-fill";
export const id="dl_170751a0c0bdd6dba7a0";
export const url=new URL("../icons/podcasts-fill.svg?v=7f9a00fdf1c91c98ad3911dcbb45a93209227db8b7f3d77b2c6fbd72af191ede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
