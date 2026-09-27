export const name="lunch_dining";
export const id="dl_77b662ad1327c7cc70c8";
export const url=new URL("../icons/lunch_dining.svg?v=52b6a36edb8ca0edb325d3c495dc1b4d3f4800fa6dfd5c74df34c4c1efce26f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
