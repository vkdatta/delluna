export const name="sentiment_very_satisfied";
export const id="dl_ccc27e1c68614f5f8250";
export const url=new URL("../icons/sentiment_very_satisfied.svg?v=f6afda6ee897fc93991fe721274d759f6dd1230c6e47e4b756c2bbc4c1c5b734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
