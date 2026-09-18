export const name="tonality";
export const id="dl_957f6b7b21244ac59249";
export const url=new URL("../icons/tonality.svg?v=547d48846d5317510dc9b3b9d5fe1d19144778139bf51771c343220ca207126e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
