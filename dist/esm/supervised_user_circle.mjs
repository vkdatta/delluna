export const name="supervised_user_circle";
export const id="dl_2dd85bbe7b9f4231bbec";
export const url=new URL("../icons/S/supervised_user_circle.svg?v=ab09e2f63b79cdf32f8d8301fc7762ee971278171b98add62c27213467454ed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
