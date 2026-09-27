export const name="selection-foreground";
export const id="dl_d071ffb1744a9b645648";
export const url=new URL("../icons/selection-foreground.svg?v=afa94d20babbff99b7369d984b9b948dba508f98544c5d9b02cf95457e97d971",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
