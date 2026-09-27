export const name="attach_email";
export const id="dl_45d057b7c22a4a36c57d";
export const url=new URL("../icons/attach_email.svg?v=2291c588d7689bed84150d7a57b1bb1c6925a39388f27638bcea7643f382f4d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
