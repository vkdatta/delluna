export const name="minor_crash-fill";
export const id="dl_269b00db8ab94e2691dd";
export const url=new URL("../icons/minor_crash-fill.svg?v=8acc9e0f9f4351123ebcf224ff034dbda6c8d81af90e9f6734cf500535f63c07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
