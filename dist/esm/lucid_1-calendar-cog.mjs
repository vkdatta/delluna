export const name="lucid_1-calendar-cog";
export const id="dl_71d0a5cb8c7b46b5bc53";
export const url=new URL("../icons/lucid_1-calendar-cog.svg?v=0db072208977a92bf857c2aa6d9f64d840f79f0cab36eacf065a09f8ea11daf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
