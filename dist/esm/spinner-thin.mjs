export const name="spinner-thin";
export const id="dl_3ebaac7f9eb249eebbc6";
export const url=new URL("../icons/S/spinner-thin.svg?v=f2a952a35ef6f857c2dcaf1b34d55557687c43d859ee80bc060fad887c76d2be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
