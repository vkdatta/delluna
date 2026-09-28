export const name="text-t-slash";
export const id="dl_96116bfc167238f53587";
export const url=new URL("../icons/text-t-slash.svg?v=729de4ce0080024e30bc0516d1efae72df192ef4b8f997e4e2c59383cbf25bbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
