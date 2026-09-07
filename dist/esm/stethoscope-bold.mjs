export const name="stethoscope-bold";
export const id="dl_6a0d286a213b46cd844d";
export const url=new URL("../icons/S/stethoscope-bold.svg?v=a88e4f17f27653bbad2b2996e5e737624104b8e4f4e8252cc98312f6abc315d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
