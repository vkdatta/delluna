export const name="lucid_3-radio-receiver";
export const id="dl_0575924a600f4799ad1d";
export const url=new URL("../icons/lucid_3-radio-receiver.svg?v=a661081f5032126ccaf93ee33952ca29a40e82472119191c207e4e1ac1f6b490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
