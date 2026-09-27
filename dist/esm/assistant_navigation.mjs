export const name="assistant_navigation";
export const id="dl_42cba3864b74c43edee1";
export const url=new URL("../icons/assistant_navigation.svg?v=af2f152091c1f9e23ff473b5b6ba0808c705800cf79e022d59f9bdabd33f03cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
