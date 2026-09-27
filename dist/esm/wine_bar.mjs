export const name="wine_bar";
export const id="dl_c018c9525aed233389f1";
export const url=new URL("../icons/wine_bar.svg?v=e5fb4461308dc71625984c007132fc1b2d6ec6d9ce16240fcfab47de30a5e3bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
