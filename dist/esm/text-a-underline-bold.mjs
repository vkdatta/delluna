export const name="text-a-underline-bold";
export const id="dl_0c9108ec17439e3ef573";
export const url=new URL("../icons/text-a-underline-bold.svg?v=af2b70d8cfa231bdf00bf0ea5ff94f6de457e294e206a4bb879ee743e549d960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
