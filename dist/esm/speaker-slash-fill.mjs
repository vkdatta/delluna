export const name="speaker-slash-fill";
export const id="dl_4edecf03bd40d1dbb6b5";
export const url=new URL("../icons/speaker-slash-fill.svg?v=593d04b61a7ea61afaf503c1fb256032b230241f40aadbe827755acee60adf1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
