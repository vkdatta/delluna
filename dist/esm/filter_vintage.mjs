export const name="filter_vintage";
export const id="dl_776120b0debd619fba99";
export const url=new URL("../icons/filter_vintage.svg?v=9df60c9b7be0a969f29753a1295384826c8d22468fc93c120950d8a89099c10b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
