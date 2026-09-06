export const name="arrows-out-cardinal-bold";
export const id="dl_032455ccf3034b42978d";
export const url=new URL("../icons/arrows-out-cardinal-bold.svg?v=d08bb33030cd5c1b316bba09e025c166a22a474d937bb5dd3f67d60247de21f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
