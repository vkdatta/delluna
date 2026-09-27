export const name="lucid_1-circle";
export const id="dl_7f96e070089741039015";
export const url=new URL("../icons/lucid_1-circle.svg?v=1386f53de4fbc57cc8a84ea9f14da366ec1be848e266aea03770b43b2594b60c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
