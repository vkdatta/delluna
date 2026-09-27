export const name="chess_knight";
export const id="dl_042ca45179912f1de4f3";
export const url=new URL("../icons/chess_knight.svg?v=ba9fd4c9565315f7026dae2dbd61ac8767c0d0a166f673d2c8f338ccd22b3efc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
