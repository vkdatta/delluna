export const name="list_alt_check";
export const id="dl_47fe91fbea039a405539";
export const url=new URL("../icons/list_alt_check.svg?v=6d792657c0479911e51d172830ebb960bc7e4ae7176bfc2fd5cee6e16e36033b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
