export const name="no_food";
export const id="dl_66172bd962b34cc1b110";
export const url=new URL("../icons/N/no_food.svg?v=530d88ba79f10f7126d71981bf0420b8cd02689fba19b3ac07d6e7368a11036e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
