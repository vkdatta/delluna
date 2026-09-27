export const name="chess";
export const id="dl_2aa96445d0066442c0c9";
export const url=new URL("../icons/chess.svg?v=58472d7548fbd9f1a57e2d4818438ac78da8a2bb8a515a5018a3c54093e757c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
