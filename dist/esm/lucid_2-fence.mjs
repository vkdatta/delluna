export const name="lucid_2-fence";
export const id="dl_e001a227d3c44f6984ec";
export const url=new URL("../icons/lucid_2-fence.svg?v=4251650a8a28bff1c4790ee50af70f87ad1c44dd428b74b33348b90bd4e39f77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
