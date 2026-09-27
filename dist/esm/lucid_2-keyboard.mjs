export const name="lucid_2-keyboard";
export const id="dl_4a4382f07352449699e5";
export const url=new URL("../icons/lucid_2-keyboard.svg?v=0632c3daaac51813ab7ce05d31c87a86a629ee02d4c0a674ba055a3bfdf1a4e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
