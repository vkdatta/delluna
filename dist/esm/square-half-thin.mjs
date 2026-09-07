export const name="square-half-thin";
export const id="dl_5b659bd381e24828849a";
export const url=new URL("../icons/S/square-half-thin.svg?v=ef9ce3495ac20f8611d74ff88e5b0416c5b8070f9e1c8fbb62f99c7ff3980cb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
