export const name="ping-pong-fill";
export const id="dl_5a9bbf8866254b4b96d6";
export const url=new URL("../icons/ping-pong-fill.svg?v=d8431f9a533f72017727ab42b88cbbf4630ee8809ff248932a9ab53ba018aac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
