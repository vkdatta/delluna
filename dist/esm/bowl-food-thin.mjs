export const name="bowl-food-thin";
export const id="dl_d14bec6a3f1b4d1cb885";
export const url=new URL("../icons/bowl-food-thin.svg?v=6aff208b6840a3e9dcc44f31ebf830cba4280820c53f760e9621268900d39c3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
