export const name="data_exploration";
export const id="dl_1af22bf51377936562ac";
export const url=new URL("../icons/data_exploration.svg?v=3eba57fe988a4935d54e6e8c7a955516a0c93810aa908e02a9ad138de793f9c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
