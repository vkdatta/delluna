export const name="text-h-thin";
export const id="dl_19d471f8a86ce6886eb9";
export const url=new URL("../icons/text-h-thin.svg?v=8802cda2ba76aa3e73067b68ac46fa4e044abf997022ac7c7a3652f630222559",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
