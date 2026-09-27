export const name="alarm_on";
export const id="dl_b4971301bd6032b76c3f";
export const url=new URL("../icons/alarm_on.svg?v=a77f8fa96147fafd22493fe478b690304cd90f6e22979fba1837b1f7a49021df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
