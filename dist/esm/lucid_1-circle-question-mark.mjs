export const name="lucid_1-circle-question-mark";
export const id="dl_3bfb07f7b4cd42818784";
export const url=new URL("../icons/lucid_1-circle-question-mark.svg?v=812ea7931695aa6acd7fd9771ff0516c2a5b6673bf8e9aea7999f546fa6fc97d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
