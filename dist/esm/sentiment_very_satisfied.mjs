export const name="sentiment_very_satisfied";
export const id="dl_e33199dc551f79bb066d";
export const url=new URL("../icons/sentiment_very_satisfied.svg?v=b244df0cb4e9f6aee8d69d75bad1d202ad32d1ff0a178ef9f7dc795355600de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
