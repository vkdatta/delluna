export const name="soundcloud-logo-light";
export const id="dl_dc5bcbfbc5f9c255bc34";
export const url=new URL("../../icons/S/soundcloud-logo-light.svg?v=ad04fa6d972a5e5627d6074bef32a799034fb21ef40c3ba41766a112666ac690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
