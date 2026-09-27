export const name="wheelchair-motion";
export const id="dl_9c6258939df7b9490adb";
export const url=new URL("../icons/wheelchair-motion.svg?v=03a6a085771f04d4aebf9f170294b81387854e5a35ce846646821ca010d52ff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
