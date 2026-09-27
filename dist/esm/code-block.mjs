export const name="code-block";
export const id="dl_d7b8229b9be64453bb95";
export const url=new URL("../icons/code-block.svg?v=d5ef628ce85cd737aa581ee5cc9ef51855c9af60c2445e8d0d62b03801d4e9b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
