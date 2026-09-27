export const name="seal-question-bold";
export const id="dl_35180055a594211d1681";
export const url=new URL("../icons/seal-question-bold.svg?v=fc1693043ec94ff07310f546c6aec215ca6ee6011e11cbeaf27aa74a611c71dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
