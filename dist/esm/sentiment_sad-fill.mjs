export const name="sentiment_sad-fill";
export const id="dl_cfe53e34f5cbe8dd695f";
export const url=new URL("../icons/sentiment_sad-fill.svg?v=a4f5a05c9c8088c47c02f5c3aff14a47dc199e480b057b06d77304e4e5bafd3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
