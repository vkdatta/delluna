export const name="lucid_2-key-round";
export const id="dl_5deb514eedcd4abc86c6";
export const url=new URL("../icons/lucid_2-key-round.svg?v=dcc3b982686423a240b2ca7db81dec99301d3b4cc8a5b5fcf8ad87fb1868b30d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
