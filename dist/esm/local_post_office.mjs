export const name="local_post_office";
export const id="dl_db8ef5db4e66e82b37f1";
export const url=new URL("../icons/local_post_office.svg?v=694f2603fccd06e1fd815cb97aa6bae989750fb459244d3ee79ca254d90a8659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
